import { ElDrawer, ElIcon, ElMenu, ElMenuItem, ElScrollbar, ElSubMenu } from 'element-plus'
import { RouterLink, useRoute } from 'vue-router'
import Icon from '../components/Icon.vue'
import { computed, defineComponent, inject } from 'vue'
import { breakpointKey, layoutKey } from '../config/provide_key'
import { breakpointOption } from '../config/config'
import { MenuModel } from '../types'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const layoutData = inject(layoutKey)!
    const breakpointData = inject(breakpointKey)!
    const navbarHeight = inject('navbarHeight')!
    const sidebarWidth = inject('sidebarWidth')!
    const sidebarDrawerSize = computed(() =>
      breakpointData.width <= breakpointOption.sm ? '50%' : '30%'
    )
    return () => (
      <>
        {breakpointData.mobile ? (
          <ElDrawer
            v-model={layoutData.showSidebarDarwer}
            size={sidebarDrawerSize.value}
            direction='ltr'
            showClose={false}
            withHeader={false}>
            <div class='w-full h-full bg-$layout-color-sidebar'>
              <MenuWrapper />
            </div>
          </ElDrawer>
        ) : (
          <aside
            style={{
              width: sidebarWidth + 'px',
              height: `calc(100% - ${navbarHeight}px)`,
              top: navbarHeight + 'px',
              backgroundColor: 'black'
            }}
            class='absolute left-0 z-99 select-none transition-all duration-300'>
            <MenuWrapper />
          </aside>
        )}
      </>
    )
  }
})

const MenuWrapper = () => {
  const route = useRoute()
  const layoutData = inject(layoutKey)!
  const breakpointData = inject(breakpointKey)!
  return (
    <ElScrollbar>
      <ElMenu
        backgroundColor='#E5E5E5'
        textColor={'black'}
        activeTextColor={'#00AC9B'}
        // defaultActive={route.path}
        uniqueOpened={false}
        collapseTransition={false}
        collapse={!breakpointData.mobile && layoutData.isCollapse}>
        {layoutData.menus.map(menu => (
          <MenuItem menu={menu} key={menu.path}></MenuItem>
        ))}
      </ElMenu>
    </ElScrollbar>
  )
}

const MenuItem = ({ menu }: { menu: MenuModel }) => {
  if (menu.children.length == 0) {
    const slots = {
      title: () => <span>{menu.title}</span>
    }
    return (
      <RouterLink to={menu.path}>
        <ElMenuItem index={menu.path} v-slots={slots}>
          <ElIcon>
            {menu.icon == '' ? (
              <div class='i-heroicons-solid-view-grid' />
            ) : (
              <Icon icon={menu.icon} />
            )}
          </ElIcon>
        </ElMenuItem>
      </RouterLink>
    )
  } else {
    return (
      <ElSubMenu index={menu.path} showTimeout={50} hideTimeout={50}>
        {{
          default: () =>
            menu.children.map(item => <MenuItem menu={item} key={item.path}></MenuItem>),
          title: () => (
            <>
              <ElIcon>
                {menu.icon == '' ? <div class='i-mdi-folder' /> : <Icon icon={menu.icon} />}
              </ElIcon>
              <span>{menu.title}</span>
            </>
          )
        }}
      </ElSubMenu>
    )
  }
}
