export {}
// 声明应用全局类型
declare global {
  // 渲染TagView的路由标签接口
  interface NavTabModel {
    title: string // 标签名字
    path: string // 标签跳转url
    icon: string // 标签icon
  }
}
