import context from '@misc/window/titlebarContextApi'

export function handleAction(action?: string, value?: string | number) {
  const c: Record<string, CallableFunction> = context
  if (action) {
    if (typeof c[action] === 'function') {
      c[action](value)
    } else {
      console.error(`action [${action}] is not available in titlebar context`)
    }
  }
}
