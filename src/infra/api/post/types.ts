enum Context {
  view = 'view',
  embed = 'embed',
  edit = 'edit'
}

enum Order {
  desc = 'desc',
  asc = 'asc'
}

type Params = {
  context?: Context
  page?: number
  per_page?: number
  search?: string
  after?: string
  author?: string
  author_exclude?: string
  before?: string
  exclude?: string
  include?: string
  offset?: string
  order?: Order
  orderby?: string
  slug?: string
  status?: string // todo: 型
  filter?: string
  categories?: string
  tags?: string
}

export {Context, Order, Params}
