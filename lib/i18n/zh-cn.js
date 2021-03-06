'use strict';

module.exports = {

  // Labels
  'Append {type}': '追加{type}',
  'Add Lane above': '在上方添加泳道',
  'Divide into two Lanes': '拆分为2条泳道',
  'Divide into three Lanes': '拆分为3条泳道',
  'Add Lane below': '在下方添加泳道',
  'Append compensation activity': '追加补偿活动',
  'Change type': '更改类型',
  'Connect using Association': '建立关联',
  'Connect using Sequence/MessageFlow or Association': '建立关联',
  'Connect using DataInputAssociation': '建立关联',
  'Remove': '移除',
  'Activate the hand tool': '激活手型工具 (用于移动画布)',
  'Activate the lasso tool': '激活选择工具 (用于选择元素)',
  'Activate the create/remove space tool': '激活工作空间创建或移除工具',
  'Activate the global connect tool': '激活连接工具',
  'Create IntermediateThrowEvent/BoundaryEvent': '创建过渡异常抛出事件/边界事件',
  'Create expanded SubProcess': '创建展开的子流程',
  'Create Pool/Participant': '创建池/道',
  'Parallel Multi Instance': '多实例并行',
  'Sequential Multi Instance': '多实例串行',
  'Loop': '循环',
  'Ad-hoc': '特别指定',
  'Create {type}': '创建{type}',
  'Task': '任务',
  'Send Task': '发送性任务',
  'Receive Task': '接收性任务',
  'User Task': '用户交互性任务',
  'Manual Task': '线下手动性任务',
  'Business Rule Task': '业务规则性任务',
  'Service Task': '服务性任务',
  'Script Task': '脚本性任务',
  'Call Activity': '呼叫性任务',
  'Sub Process (collapsed)': '子流程 (折叠的)',
  'Start Event': '启动事件',
  'StartEvent': '启动事件',
  'Intermediate Throw Event': '过渡异常抛出事件',
  'IntermediateThrowEvent': '过渡异常抛出事件',
  'End Event': '结束事件',
  'EndEvent': '结束事件',
  'Message Start Event': '消息性启动事件',
  'Timer Start Event': '定时启动事件',
  'Conditional Start Event': '条件性启动事件',
  'Signal Start Event': '信号性启动事件',
  'Error Start Event': '错误性启动事件',
  'Escalation Start Event': '上升性启动事件',
  'Compensation Start Event': '补偿性启动事件',
  'Message Start Event (non-interrupting)': '消息性启动事件 (不可中断)',
  'Timer Start Event (non-interrupting)': '定时启动事件 (不可中断)',
  'Conditional Start Event (non-interrupting)': '条件性启动事件 (不可中断)',
  'Signal Start Event (non-interrupting)': '信号性启动事件 (不可中断)',
  'Escalation Start Event (non-interrupting)': '上升性启动事件 (不可中断)',
  'Message Intermediate Catch Event': '消息性过渡异常捕捉事件',
  'Message Intermediate Throw Event': '消息性过渡异常抛出事件',
  'Timer Intermediate Catch Event': '定时过渡异常捕捉事件',
  'Escalation Intermediate Throw Event': '上升性过渡异常抛出事件',
  'Conditional Intermediate Catch Event': '条件性过渡异常捕捉事件',
  'Link Intermediate Catch Event': '链接性过渡异常捕捉事件',
  'Link Intermediate Throw Event': '链接性过渡异常抛出事件',
  'Compensation Intermediate Throw Event': '补偿性过渡异常抛出事件',
  'Signal Intermediate Catch Event': '信号性过渡异常捕捉事件',
  'Signal Intermediate Throw Event': '信号性过渡异常抛出事件',
  'Message End Event': '消息性结束事件',
  'Escalation End Event': '上升性结束事件',
  'Error End Event': '错误性结束事件',
  'Cancel End Event': '撤销性结束事件',
  'Compensation End Event': '补偿性结束事件',
  'Signal End Event': '信号性结束事件',
  'Terminate End Event': '终止性结束事件',
  'Message Boundary Event': '消息性边界事件',
  'Message Boundary Event (non-interrupting)': '消息性边界事件 (不可中断)',
  'Timer Boundary Event': '定时边界事件',
  'Timer Boundary Event (non-interrupting)': '定时边界 (不可中断)',
  'Escalation Boundary Event': '上升性边界事件',
  'Escalation Boundary Event (non-interrupting)': '上升性边界事件 (不可中断)',
  'Conditional Boundary Event': '条件性边界事件',
  'Conditional Boundary Event (non-interrupting)': '条件性边界事件 (不可中断)',
  'Error Boundary Event': '错误性边界事件',
  'Cancel Boundary Event': '撤销性边界事件',
  'Signal Boundary Event': '信号性边界事件',
  'Signal Boundary Event (non-interrupting)': '信号性边界事件 (不可中断)',
  'Compensation Boundary Event': '补偿性边界事件',
  'Exclusive Gateway': '排他性关口',
  'ExclusiveGateway': '排他性关口',
  'Parallel Gateway': '并行关口',
  'Inclusive Gateway': '包容性关口',
  'Complex Gateway': '复合性关口',
  'Event based Gateway': '基于事件的关口',
  'Transaction': '事务',
  'Sub Process': '子流程',
  'Event Sub Process': '事件子流程',
  'Collapsed Pool': '折叠的池子',
  'Expanded Pool': '展开的池子',
  'DataObjectReference': '数据对象引用',
  'DataStoreReference': '数据存储引用',
  'TextAnnotation': '文本注释',

  'Press SHIFT+Enter for line feed': '按下SHIFT+Enter来换行',

  // Errors
  'no parent for {element} in {parent}': '在{parent}中不存在{element}的父级关系',
  'no shape type specified': '未指定类型',
  'flow elements must be children of pools/participants': '流程元素必须在池/道里面',
  'out of bounds release': '超出边界',
  'more than {count} child lanes': '超过{count}个子道',
  'element required': '必需的元素',
  'diagram not part of bpmn:Definitions': '不是有效的BPMN图表',
  'no diagram to display': '没有可显示的图表',
  'no process or collaboration to display': '没有可显示的流程或协作',
  'element {element} referenced by {referenced}#{property} not yet drawn': '被{referenced}#{property}引用的{element}没有绘制',
  'already rendered {element}': '已经存在{element}',
  'failed to import {element}': '{element}导入失败',

  //Properties Provider
  'General': '通用',
  'Id': '标识',
  'Name': '名称',
  'Value': '值',
  'ToDo Url': '待办地址',
  'Yes': '是',
  'No': '否',
  
  'Process Id': '流程标识',
  'Process Name': '流程名称',
  'Executable': '可执行',

  'Imports & Globals': '类型与全局变量',
  'Imports': '类型',
  'Add Import': '添加类型',
  'Globals': '全局变量',
  'Add Global': '添加变量',
  'Identifier': '标识(必须唯一)',
  'Type': '变量类型',
  'Type Name': '类型名称(任意Class Name)',
  
  'Actor Id': '分配给',
  'Actor of the User Task': '指定任务的执行者',
  'Group Id': '用户组标识',
  'Content Id': '',
  'Comment Id': '',
  'Skippable': '是否可跳过',
  'Priority': '优先级',
  'Organization Level': '组织级别',
  'Role Codes': '角色编码(多个用逗号分开)',
  'Roles of this User Task': '可执行任务的角色',
  'Multi-User': '是否会签',
  
  'Input/Output Parameters': '输入/输出参数',
  'Input Parameters': '输入参数',
  'Output Parameters': '输出参数',
  'Parameters': '',
  'Parameter Detail': '参数详情',
  
  'Condition Type': '条件类型',
  'Expression': '表达式',
  'Script': '脚本',
  'Script Format': '脚本语言',
  'Script Type': '脚本类型',
  'Inline Script': '内嵌脚本',
  'External Resource': '外部文件',
  'Resource': '文件路径',
  
  'Gateway Direction': '关口方向类型',
  'Diverging': '分叉',
  'Converging': '汇聚',
  'Mixed': '混合',
  'Unspecified': '未指定'
};
