import { FormProps } from '/@/components/Table';
import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getSearchColumns(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `username`,
        label: `账户`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
        componentProps: {
          placeholder: '请输入账户',
        },
      },
      {
        field: `realname`,
        label: `真实姓名`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
      },
      {
        field: `email`,
        label: `邮箱`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 6,
        },
      },
      {
        field: `mobile`,
        label: `手机号码`,
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
      title: '账户',
      dataIndex: 'username',
      // width: 80,
    },
    {
      title: '真实姓名',
      dataIndex: 'realname',
      // width: 80,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      // width: 150,
      // sorter: true,
      // defaultHidden: true,
    },
    {
      title: '手机号码',
      // width: 80,
      // sorter: true,
      dataIndex: 'mobile',
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
    {
      title: '备注信息',
      // sorter: true,
      dataIndex: 'remark',
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
      field: `username`,
      label: `账户`,
      component: 'Input',
      colProps: {
        span: 24,
      },
      slot: 'usernameSlot',
      componentProps: {
        placeholder: '请输入账户',
      },
    },
    {
      field: `realname`,
      label: `真实姓名`,
      component: 'Input',
      componentProps: {
        placeholder: '请输入账户',
      },
      colProps: {
        span: 24,
      },
    },
    {
      field: `email`,
      label: `邮箱`,
      component: 'Input',
      colProps: {
        span: 24,
      },
    },
    {
      field: `mobile`,
      label: `手机号码`,
      component: 'Input',
      colProps: {
        span: 24,
      },
      defaultValue: null,
    },
  ];
}
