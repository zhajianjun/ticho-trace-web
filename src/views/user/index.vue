<template>
  <div>
    <BasicTable @register="registerTable">
      <template #tableTitle>
        <a-space :size="10">
          <a-button
            ghost
            type="primary"
            preIcon="ant-design:plus-circle-outlined"
            @click="openUserDialogue(true, null)"
            >新增
          </a-button>
          <a-button ghost type="danger" preIcon="ant-design:delete-outlined"
            >删除{{ checkedKeysText }}
          </a-button>
        </a-space>
      </template>
      <template #bodyCell="{ column, record }">
        <!--suppress TypeScriptUnresolvedReference -->
        <template v-if="column.key === 'action'">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '',
                icon: 'material-symbols:edit-note-sharp',
                onClick: openUserDialogue.bind(null, false, record),
              },
              {
                label: '',
                icon: 'ic:outline-delete-outline',
                popConfirm: {
                  title: '是否删除？',
                  confirm: openUserDialogue.bind(null, false, record),
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
      :title="modelTitle"
      :closeFunc="closeFunc"
    >
      <div class="pt-3px pr-3px">
        <BasicForm @register="registerForm" />
      </div>
      <template #footer>
        <div style="text-align: center">
          <a-space :size="10">
            <a-button type="primary" @click="resetFieldsProxy">重置</a-button>
            <a-button type="primary" @click="handleSubmit">提交</a-button>
          </a-space>
        </div>
      </template>
    </BasicModal>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { getTableColumns, getSearchColumns, getModalFormColumns } from './tableData';
  import { Space } from 'ant-design-vue';
  import { userPage } from '/@/api/sys/user';
  import { BasicForm, useForm } from '/@/components/Form';
  // import { User } from '/@/api/sys/model/userModel';

  export default defineComponent({
    components: { BasicForm, TableAction, BasicTable, BasicModal, ASpace: Space },
    setup() {
      const checkedKeys = ref<Array<string | number>>([]);
      const modelTemp = ref<Recordable | null>({});
      const model = ref<Recordable | null>({});
      const modelTitle = ref<string>();
      const checkedKeysText = ref<string | number>();
      const [registerTable] = useTable({
        title: '',
        api: userPage,
        columns: getTableColumns(),
        useSearchForm: true,
        formConfig: getSearchColumns(),
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

      const [registerModel, { openModal }] = useModal();

      const [registerForm, { resetFields, setFieldsValue, getFieldsValue }] = useForm({
        labelWidth: 120,
        schemas: getModalFormColumns(),
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      function openUserDialogue(isAdd: boolean, record: Recordable | null) {
        if (isAdd) {
          modelTitle.value = '新增';
          modelTemp.value = {};
        } else {
          modelTitle.value = '修改';
          modelTemp.value = record;
        }
        openModal(true);
        nextTick(() => {
          setFieldsValue(modelTemp.value);
        });
      }

      function resetFieldsProxy() {
        if (modelTitle.value === '新增') {
          resetFields();
          return;
        }
        setFieldsValue(modelTemp.value);
      }

      function handleSubmit() {
        // const user: Recordable<User> = getFieldsValue();
        console.log(getFieldsValue());
        openModal(false);
        resetFields();
      }

      function closeFunc() {
        resetFields();
        return true;
      }

      function onSelect(record, selected) {
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, record.id];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => id !== record.id);
        }
        checkedKeysText.value = checkedKeys.value.length > 0 ? checkedKeys.value.length : '';
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
        checkedKeysText.value = checkedKeys.value.length > 0 ? checkedKeys.value.length : '';
      }

      return {
        registerTable,
        registerModel,
        registerForm,
        checkedKeys,
        checkedKeysText,
        onSelect,
        onSelectAll,
        openUserDialogue,
        closeFunc,
        resetFieldsProxy,
        handleSubmit,
        modelTitle,
        model,
      };
    },
  });
</script>
