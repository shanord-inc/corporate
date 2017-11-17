export function assert(val: any) {
  if (val) {
    if (Array.isArray(val)) {
      val.map(v => {
        console.log('####', v)
      })
    } else {
      console.log('####', val)
    }
  }
  return val
}
