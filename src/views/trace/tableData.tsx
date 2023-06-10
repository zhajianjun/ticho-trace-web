import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getSearchColumns(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `id`,
        label: `主键编号`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入主键编号',
        },
      },
      {
        field: `systemId`,
        label: `系统id`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入系统id',
        },
      },
      {
        field: `traceId`,
        label: `链路id`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入链路id',
        },
      },
      {
        field: `spanId`,
        label: `跨度id`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入跨度id',
        },
      },
      {
        field: `appName`,
        label: `应用名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入应用名称',
        },
      },
      {
        field: `env`,
        label: `应用环境`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入应用环境',
        },
      },
      {
        field: `ip`,
        label: `ip`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入ip',
        },
      },
      {
        field: `preAppName`,
        label: `上个链路的应用名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入上个链路的应用名称',
        },
      },
      {
        field: `preIp`,
        label: `上个链路的Ip`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入上个链路的Ip',
        },
      },
      {
        field: `type`,
        label: `请求类型`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入请求类型',
        },
      },
      {
        field: `url`,
        label: `接口`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入接口',
        },
      },
      {
        field: `port`,
        label: `端口号`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入端口号',
        },
      },
      {
        field: `fullUrl`,
        label: `全路径接口`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入全路径接口',
        },
      },
      {
        field: `method`,
        label: `方法`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入方法',
        },
      },
      {
        field: `status`,
        label: `响应状态`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入响应状态',
        },
      },
      {
        field: `startTimeFirst`,
        label: `请求开始时间起始`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入请求开始时间起始',
        },
      },
      {
        field: `startTimeLast`,
        label: `请求开始时间终止`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入请求开始时间终止',
        },
      },
      {
        field: `endTimeFirst`,
        label: `请求结束时间起始`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入请求结束时间起始',
        },
      },
      {
        field: `endTimeLast`,
        label: `请求结束时间终止`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入请求结束时间终止',
        },
      },
      {
        field: `consumeFirst`,
        label: `耗时起始`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入耗时起始',
        },
      },
      {
        field: `consumeLast`,
        label: `耗时终止`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入耗时终止',
        },
      },
    ],
  };
}

export function getTableColumns(): BasicColumn[] {
  return [
    {
      title: '主键编号',
      dataIndex: 'id',
    },
    {
      title: '系统id',
      dataIndex: 'systemId',
    },
    {
      title: '系统名称',
      dataIndex: 'systemName',
    },
    {
      title: '链路id',
      dataIndex: 'traceId',
    },
    {
      title: '跨度id',
      dataIndex: 'spanId',
    },
    {
      title: '应用名称',
      dataIndex: 'appName',
    },
    {
      title: '应用环境',
      dataIndex: 'env',
    },
    {
      title: 'ip',
      dataIndex: 'ip',
    },
    {
      title: '上个链路的应用名称',
      dataIndex: 'preAppName',
    },
    {
      title: '上个链路的Ip',
      dataIndex: 'preIp',
    },
    {
      title: '请求类型',
      dataIndex: 'type',
    },
    {
      title: '接口',
      dataIndex: 'url',
    },
    {
      title: '端口号',
      dataIndex: 'port',
    },
    {
      title: '全路径接口',
      dataIndex: 'fullUrl',
    },
    {
      title: '方法',
      dataIndex: 'method',
    },
    {
      title: '响应状态',
      dataIndex: 'status',
    },
    {
      title: '请求开始时间戳',
      dataIndex: 'start',
    },
    {
      title: '请求结束时间戳',
      dataIndex: 'end',
    },
    {
      title: '请求开始时间',
      dataIndex: 'startTime',
    },
    {
      title: '请求结束时间',
      dataIndex: 'endTime',
    },
    {
      title: '耗时',
      dataIndex: 'consume',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
  ];
}
