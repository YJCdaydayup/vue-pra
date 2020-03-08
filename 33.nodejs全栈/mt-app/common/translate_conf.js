export const LANGUAGE = 'LANGUAGE'

const FLAGS = {
  CH: {
    flag1: '我是天下第一',
    flag2: '你好吗'
  },
  EN: {
    flag1: 'I am No. 1',
    flag2: 'How Are You？'
  }
}

export default {
  get_flag1(state) {
    return FLAGS[state].flag1
  },
  get_flag2(state) {
    return FLAGS[state].flag2
  }
}

