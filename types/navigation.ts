export interface NavigationLink {
  to: string
  icon: string
  label: string
}

export interface NavigationState {
  isSidebarCollapsed: boolean
  isSidebarOpen: boolean
}

export type NavigationLinks = NavigationLink[] 