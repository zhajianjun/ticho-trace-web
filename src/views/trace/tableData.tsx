import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getSearchColumns(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `traceId`,
        label: `链路id`,
        required: true,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入链路id',
        },
      },
    ],
  };
}

export function getTableColumns(): BasicColumn[] {
  return [
    {
      title: '系统名称',
      dataIndex: 'systemName',
      // width: 80,
    },
    {
      title: '链路id',
      dataIndex: 'traceId',
      // width: 80,
    },
    {
      title: '跨度id',
      dataIndex: 'spanId',
      // width: 150,
      // sorter: true,
      // defaultHidden: true,
    },
    {
      title: '应用名称',
      // width: 80,
      // sorter: true,
      dataIndex: 'appName',
    },
    {
      title: '应用环境',
      // sorter: true,
      dataIndex: 'env',
    },
    {
      title: 'ip',
      // sorter: true,
      dataIndex: 'ip',
    },
    {
      title: '上个链路的应用名称',
      // sorter: true,
      dataIndex: 'preAppName',
    },
    {
      title: '上个链路的Ip',
      // sorter: true,
      dataIndex: 'preIp',
    },
    {
      title: '请求类型',
      // sorter: true,
      dataIndex: 'type',
    },
    {
      title: '接口',
      // sorter: true,
      dataIndex: 'url',
    },
    {
      title: '端口号',
      // sorter: true,
      dataIndex: 'port',
    },
    {
      title: '响应状态',
      // sorter: true,
      dataIndex: 'status',
    },
    {
      title: '请求开始时间',
      // sorter: true,
      dataIndex: 'startTime',
    },
    {
      title: '请求结束时间',
      // sorter: true,
      dataIndex: 'endTime',
    },
    {
      title: '耗时(ms)',
      // sorter: true,
      dataIndex: 'consume',
    },
  ];
}
