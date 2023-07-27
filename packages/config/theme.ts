import { ThemeModel } from '../types'

export const lightThemes: Array<ThemeModel> = [
  {
    element: {
      primary: '#409EFF',
      success: '#67C23A',
      warning: '#E6A23C',
      danger: '#F56C6C',
      info: '#909399'
    },
    layout: {
      navbar: '#f5f5f5',
      sidebar: '#E5E5E5',
      section: '#ffffff',
      sidebarActiveText: '#00AC9B'
    }
  }
]

export const darkThemes: Array<ThemeModel> = [
  {
    element: {
      primary: '#409EFF',
      success: '#67C23A',
      warning: '#E6A23C',
      danger: '#F56C6C',
      info: '#909399'
    },
    layout: {
      navbar: '#353b48',
      sidebar: '#3c3f41',
      section: '#3c3c3c',
      sidebarActiveText: '#00BBFF'
    }
  }
]
