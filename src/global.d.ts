export interface CarResponse {
  maintenance_for_calculation: MaintenanceForCalculation
  insurance_2_year: Insurance2Year
  URL: Url
  Status_avto: StatusAvto
  luxury_tax_2_years: LuxuryTax2Years
  edited_time: EditedTime
  Title: Title
  engine_capacity: EngineCapacity
  tire_month: TireMonth
  engine_type: EngineType
  luxury_tax_3_years: LuxuryTax3Years
  cost_of_capital: CostOfCapital
  carpets_month: CarpetsMonth
  car_price_ex_showroom: CarPriceExShowroom
  tinted_glass: TintedGlass
  Text: Text4
  car_name: CarName
  carpets: Carpets
  acceleration: Acceleration
  osago_2_year: Osago2Year
  tinted_glass_month: TintedGlassMonth
  tire_service_month: TireServiceMonth
  armored_film_month : ArmoredFilmMonth
  favorite_cars: FavoriteCars
  motor_protection_month: MotorProtectionMonth
  seo_description: SeoDescription
  sandpulse_form: SandpulseForm
  hubspot_form: HubspotForm
  pension_fund: PensionFund
  Availability: Availability
  tire_service: TireService
  "Last edited time": LastEditedTime
  label_status: LabelStatus
  drive_type: DriveType
  car_brand: CarBrand
  ts_month: TsMonth
  registration: Registration
  insurance_1_year: Insurance1Year
  hubspot_cover: HubspotCover
  safety_net_month: SafetyNetMonth
  Cover: Cover
  luxury_tax: LuxuryTax
  vehicle_interior: VehicleInterior
  Status: Status
  maintenance: Maintenance
  body_type: BodyType
  bottom_cover: BottomCover
  tires: Tires
  radiator_protection: RadiatorProtection
  Footer: Footer
  video: Video
  osago: Osago
  seo_title: SeoTitle
  Photo: Photo
  power: Power
  win: Win
  fuel_consumption: FuelConsumption
  armored_film: ArmoredFilm
  residual_value: ResidualValue
  safety_net: SafetyNet
  Name: Name
}

export interface MaintenanceForCalculation {
  id: string
  type: string
  number: number
}

export interface Insurance2Year {
  id: string
  type: string
  formula: Formula
}

export interface Formula {
  type: string
  number: number
}

export interface Url {
  id: string
  type: string
  rich_text: RichText[]
}

export interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Text {
  content: string
  link: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface StatusAvto {
  id: string
  type: string
  select: Select
}

export interface Select {
  id: string
  name: string
  color: string
}

export interface LuxuryTax2Years {
  id: string
  type: string
  number: number
}

export interface EditedTime {
  id: string
  type: string
  formula: Formula2
}

export interface Formula2 {
  type: string
  date: Date
}

export interface Date {
  start: string
  end: any
  time_zone: any
}

export interface Title {
  id: string
  type: string
  rich_text: RichText2[]
}

export interface RichText2 {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: string
  href: any
}

export interface Text2 {
  content: string
  link: any
}

export interface Annotations2 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface EngineCapacity {
  id: string
  type: string
  rich_text: RichText3[]
}

export interface RichText3 {
  type: string
  text: Text3
  annotations: Annotations3
  plain_text: string
  href: any
}

export interface Text3 {
  content: string
  link: any
}

export interface Annotations3 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface TireMonth {
  id: string
  type: string
  formula: Formula3
}

export interface Formula3 {
  type: string
  number: number
}

export interface EngineType {
  id: string
  type: string
  select: Select2
}

export interface Select2 {
  id: string
  name: string
  color: string
}

export interface LuxuryTax3Years {
  id: string
  type: string
  formula: Formula4
}

export interface Formula4 {
  type: string
  number: number
}

export interface CostOfCapital {
  id: string
  type: string
  formula: Formula5
}

export interface Formula5 {
  type: string
  number: number
}

export interface CarpetsMonth {
  id: string
  type: string
  formula: Formula6
}

export interface Formula6 {
  type: string
  number: number
}

export interface CarPriceExShowroom {
  id: string
  type: string
  number: number
}

export interface TintedGlass {
  id: string
  type: string
  formula: Formula7
}

export interface Formula7 {
  type: string
  number: number
}

export interface Text4 {
  id: string
  type: string
  rich_text: RichText4[]
}

export interface RichText4 {
  type: string
  text: Text5
  annotations: Annotations4
  plain_text: string
  href: any
}

export interface Text5 {
  content: string
  link: any
}

export interface Annotations4 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface CarName {
  id: string
  type: string
  rich_text: RichText5[]
}

export interface RichText5 {
  type: string
  text: Text6
  annotations: Annotations5
  plain_text: string
  href: any
}

export interface Text6 {
  content: string
  link: any
}

export interface Annotations5 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Carpets {
  id: string
  type: string
  number: number
}

export interface Acceleration {
  id: string
  type: string
  rich_text: RichText6[]
}

export interface RichText6 {
  type: string
  text: Text7
  annotations: Annotations6
  plain_text: string
  href: any
}

export interface Text7 {
  content: string
  link: any
}

export interface Annotations6 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Osago2Year {
  id: string
  type: string
  formula: Formula8
}

export interface Formula8 {
  type: string
  number: number
}

export interface TintedGlassMonth {
  id: string
  type: string
  formula: Formula9
}

export interface Formula9 {
  type: string
  number: number
}

export interface TireServiceMonth {
  id: string
  type: string
  formula: Formula10
}

export interface Formula10 {
  type: string
  number: number
}

export interface ArmoredFilmMonth {
  id: string
  type: string
  formula: Formula11
}

export interface Formula11 {
  type: string
  number: number
}

export interface FavoriteCars {
  id: string
  type: string
  select: Select3
}

export interface Select3 {
  id: string
  name: string
  color: string
}

export interface MotorProtectionMonth {
  id: string
  type: string
  formula: Formula12
}

export interface Formula12 {
  type: string
  number: number
}

export interface SeoDescription {
  id: string
  type: string
  rich_text: any[]
}

export interface SandpulseForm {
  id: string
  type: string
  rich_text: RichText7[]
}

export interface RichText7 {
  type: string
  text: Text8
  annotations: Annotations7
  plain_text: string
  href: any
}

export interface Text8 {
  content: string
  link: any
}

export interface Annotations7 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface HubspotForm {
  id: string
  type: string
  rich_text: RichText8[]
}

export interface RichText8 {
  type: string
  text: Text9
  annotations: Annotations8
  plain_text: string
  href: any
}

export interface Text9 {
  content: string
  link: any
}

export interface Annotations8 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface PensionFund {
  id: string
  type: string
  formula: Formula13
}

export interface Formula13 {
  type: string
  number: number
}

export interface Availability {
  id: string
  type: string
  select: Select4
}

export interface Select4 {
  id: string
  name: string
  color: string
}

export interface TireService {
  id: string
  type: string
  formula: Formula14
}

export interface Formula14 {
  type: string
  number: number
}

export interface LastEditedTime {
  id: string
  type: string
  last_edited_time: string
}

export interface LabelStatus {
  id: string
  type: string
  select: Select5
}

export interface Select5 {
  id: string
  name: string
  color: string
}

export interface DriveType {
  id: string
  type: string
  select: Select6
}

export interface Select6 {
  id: string
  name: string
  color: string
}

export interface CarBrand {
  id: string
  type: string
  select: Select7
}

export interface Select7 {
  id: string
  name: string
  color: string
}

export interface TsMonth {
  id: string
  type: string
  formula: Formula15
}

export interface Formula15 {
  type: string
  number: number
}

export interface Registration {
  id: string
  type: string
  formula: Formula16
}

export interface Formula16 {
  type: string
  number: number
}

export interface Insurance1Year {
  id: string
  type: string
  formula: Formula17
}

export interface Formula17 {
  type: string
  number: number
}

export interface HubspotCover {
  id: string
  type: string
  files: File[]
}

export interface File {
  name: string
  type: string
  file: File2
}

export interface File2 {
  url: string
  expiry_time: string
}

export interface SafetyNetMonth {
  id: string
  type: string
  formula: Formula18
}

export interface Formula18 {
  type: string
  number: number
}

export interface Cover {
  id: string
  type: string
  files: File3[]
}

export interface File3 {
  name: string
  type: string
  file: File4
}

export interface File4 {
  url: string
  expiry_time: string
}

export interface LuxuryTax {
  id: string
  type: string
  number: number
}

export interface VehicleInterior {
  id: string
  type: string
  select: Select8
}

export interface Select8 {
  id: string
  name: string
  color: string
}

export interface Status {
  id: string
  type: string
  status: Status2
}

export interface Status2 {
  id: string
  name: string
  color: string
}

export interface Maintenance {
  id: string
  type: string
  formula: Formula19
}

export interface Formula19 {
  type: string
  number: number
}

export interface BodyType {
  id: string
  type: string
  select: Select9
}

export interface Select9 {
  id: string
  name: string
  color: string
}

export interface BottomCover {
  id: string
  type: string
  files: File5[]
}

export interface File5 {
  name: string
  type: string
  file: File6
}

export interface File6 {
  url: string
  expiry_time: string
}

export interface Tires {
  id: string
  type: string
  number: number
}

export interface RadiatorProtection {
  id: string
  type: string
  number: number
}

export interface Footer {
  id: string
  type: string
  select: Select10
}

export interface Select10 {
  id: string
  name: string
  color: string
}

export interface Video {
  id: string
  type: string
  rich_text: RichText9[]
}

export interface RichText9 {
  type: string
  text: Text10
  annotations: Annotations9
  plain_text: string
  href: any
}

export interface Text10 {
  content: string
  link: any
}

export interface Annotations9 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Osago {
  id: string
  type: string
  formula: Formula20
}

export interface Formula20 {
  type: string
  number: number
}

export interface SeoTitle {
  id: string
  type: string
  rich_text: any[]
}

export interface Photo {
  id: string
  type: string
  files: File7[]
}

export interface File7 {
  name: string
  type: string
  file: File8
}

export interface File8 {
  url: string
  expiry_time: string
}

export interface Power {
  id: string
  type: string
  rich_text: RichText10[]
}

export interface RichText10 {
  type: string
  text: Text11
  annotations: Annotations10
  plain_text: string
  href: any
}

export interface Text11 {
  content: string
  link: any
}

export interface Annotations10 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Win {
  id: string
  type: string
  rich_text: RichText11[]
}

export interface RichText11 {
  type: string
  text: Text12
  annotations: Annotations11
  plain_text: string
  href: any
}

export interface Text12 {
  content: string
  link: any
}

export interface Annotations11 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface FuelConsumption {
  id: string
  type: string
  number: number
}

export interface ArmoredFilm {
  id: string
  type: string
  number: number
}

export interface ResidualValue {
  id: string
  type: string
  number: number
}

export interface SafetyNet {
  id: string
  type: string
  formula: Formula21
}

export interface Formula21 {
  type: string
  number: number
}

export interface Name {
  id: string
  type: string
  title: Title2[]
}

export interface Title2 {
  type: string
  text: Text13
  annotations: Annotations12
  plain_text: string
  href: any
}

export interface Text13 {
  content: string
  link: any
}

export interface Annotations12 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

declare global {
  interface Window {
    fbq?: any;
  }
}