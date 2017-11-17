import Model from '../lib/Model'

export interface SiteType {
  catchphrase: string
  siteTitle: string
  siteDescription: string
  information: {title: string, content: string}[]
}

export default class Site extends Model<SiteType> {
  catchphrase: string
  title: string
  description: string
  information: {title: string, content: string}[]

  constructor(props: SiteType) {
    super(props)
    this.catchphrase = props.catchphrase
    this.title = props.siteTitle
    this.description = props.siteDescription
    this.information = props.information
  }
}
