<template>
  <BasicTable @register="registerTable">
    <template #tableTitle>
      <a-space :size="10">
        <a-button ghost type="primary" preIcon="ant-design:plus-circle-outlined" >新增</a-button>
        <a-button ghost type="danger" preIcon="ant-design:delete-outlined">删除{{ checkedKeysText }}</a-button>
      </a-space>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <TableAction
          stopButtonPropagation
          :actions="[
              {
                label: '',
                icon: 'material-symbols:edit-note-sharp',
                onClick: openUserDialogue.bind(null, record),
              },
              {
                label: '',
                icon: 'ic:outline-delete-outline',
                popConfirm: {
                  title: '是否删除？',
                  confirm: openUserDialogue.bind(null, record),
                },
              },
            ]"
        />
      </template>
    </template>
  </BasicTable>
  <BasicModal
    v-bind="$attrs"
    @register="registerModel"
    title="Modal Title"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import {BasicTable, TableAction, useTable} from '/@/components/Table';
  import {BasicModal, useModal } from '/@/components/Modal';
  import {getBasicColumns, getFormConfig, getModalFormColumns} from './tableData';
  import { Alert, Space } from 'ant-design-vue';
  import { userPage } from '/@/api/sys/user';
  import {BasicForm, useForm} from "/@/components/Form";

  export default defineComponent({
    components: {BasicForm, TableAction, BasicTable, BasicModal, AAlert: Alert, ASpace: Space },
    setup() {
      const checkedKeys = ref<Array<string | number>>([]);
      const modelRef = ref({});
      const checkedKeysText = ref<string | number>();
      const [registerTable] = useTable({
        title: '',
        api: userPage,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
          onSelect: onSelect,
          onSelectAll: onSelectAll,
        },
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          // slots: { customRender: 'action' },
        },
      });

      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
        },
      ] = useForm({
        labelWidth: 120,
        schemas: getModalFormColumns(),
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [registerModel, { openModal: openModalProxy }] = useModal();

      function onSelect(record, selected) {
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, record.id];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => id !== record.id);
        }
        checkedKeysText.value = checkedKeys.value.length > 0 ?  checkedKeys.value.length : '';
      }

      function onSelectAll(selected, _selectedRows, changeRows) {
        const changeIds = changeRows.map((item) => item.id);
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, ...changeIds];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => {
            return !changeIds.includes(id);
          });
        }
        checkedKeysText.value = checkedKeys.value.length > 0 ?  checkedKeys.value.length : '';
      }

      function openUserDialogue(record: Recordable){
        modelRef.value = record;
        openModalProxy(true);
      }

      return {
        registerTable,
        registerModel,
        registerForm,
        checkedKeys,
        checkedKeysText,
        onSelect,
        onSelectAll,
        model: modelRef,
        openUserDialogue
      };
    },
  });
</script>
