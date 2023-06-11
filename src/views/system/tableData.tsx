import { FormProps } from '/@/components/Table';
import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getSearchColumns(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `systemId`,
        label: `系统id`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
        componentProps: {
          placeholder: '请输入系统id',
        },
      },
      {
        field: `systemName`,
        label: `系统名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
      },
      {
        field: `secret`,
        label: `秘钥`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
      },
      {
        field: `status`,
        label: `系统状态`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
      },
      {
        field: `remark`,
        label: `备注信息`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
      },
    ],
  };
}

export function getTableColumns(): BasicColumn[] {
  return [
    {
      title: '系统id',
      dataIndex: 'systemId',
      // width: 80,
    },
    {
      title: '系统名称',
      dataIndex: 'systemName',
      // width: 80,
    },
    {
      title: '秘钥',
      dataIndex: 'secret',
      // width: 150,
      // sorter: true,
      // defaultHidden: true,
    },
    {
      title: '系统状态',
      // width: 80,
      // sorter: true,
      dataIndex: 'status',
    },
    {
      title: '备注信息',
      // sorter: true,
      dataIndex: 'remark',
    },
    {
      title: '创建人',
      // sorter: true,
      dataIndex: 'createBy',
    },
    {
      title: '创建时间',
      // sorter: true,
      dataIndex: 'createTime',
    },
    {
      title: '更新人',
      // sorter: true,
      dataIndex: 'updateBy',
    },
    {
      title: '更新时间',
      // sorter: true,
      dataIndex: 'updateTime',
    },
  ];
}

export function getModalFormColumns(): FormSchema[] {
  return [
    {
      field: `id`,
      component: 'Input',
      label: `编号`,
      show: false,
    },
    {
      field: `systemId`,
      label: `系统id`,
      component: 'Input',
      colProps: {
        span: 24,
      },
      slot: 'systemIdSlot',
      componentProps: {
        placeholder: '请输入系统id',
      },
    },
    {
      field: `systemName`,
      label: `系统名称`,
      component: 'Input',
      colProps: {
        span: 24,
      },
    },
    {
      field: `secret`,
      label: `秘钥`,
      component: 'Input',
      colProps: {
        span: 24,
      },
    },
    {
      field: `status`,
      label: `系统状态`,
      component: 'Input',
      colProps: {
        span: 24,
      },
    },
    {
      field: `remark`,
      label: `备注信息`,
      component: 'Input',
      colProps: {
        span: 24,
      },
      defaultValue: null,
    },
  ];
}
