export interface IListing {
  id: string
  listing_url: string
  scrape_id: string
  last_scraped: Date
  name: string
  summary: null | string
  space: null | string
  description: string
  experiences_offered: ExperiencesOffered
  neighborhood_overview: null | string
  notes: null | string
  transit: null | string
  access: null | string
  interaction: null | string
  house_rules: null | string
  thumbnail_url: null | string
  medium_url: null | string
  picture_url: PictureURL | null
  xl_picture_url: null | string
  host_id: string
  host_url: string
  host_name: string
  host_since: Date
  host_location: null | string
  host_about: null | string
  host_response_time: HostResponseTime
  host_response_rate: number
  host_acceptance_rate: null
  host_thumbnail_url: string
  host_picture_url: string
  host_neighbourhood: null | string
  host_listings_count: number
  host_total_listings_count: number
  host_verifications: HostVerification[]
  street: string
  neighbourhood: null | string
  neighbourhood_cleansed: string
  neighbourhood_group_cleansed: NeighbourhoodGroupCleansed
  city: City
  state: City | null
  zipcode: null | string
  market: City | null
  smart_location: SmartLocation
  country_code: CountryCode
  country: Country
  latitude: string
  longitude: string
  property_type: PropertyType
  room_type: RoomType
  accommodates: number
  bathrooms: number | null
  bedrooms: number | null
  beds: number
  bed_type: BedType
  amenities: Amenity[]
  square_feet: number | null
  price: number
  weekly_price: number | null
  monthly_price: number | null
  security_deposit: number | null
  cleaning_fee: number | null
  guests_included: number
  extra_people: number
  minimum_nights: number
  maximum_nights: number
  calendar_updated: CalendarUpdated
  has_availability: null
  availability_30: number
  availability_60: number
  availability_90: number
  availability_365: number
  calendar_last_scraped: Date
  number_of_reviews: number
  first_review: Date | null
  last_review: Date | null
  review_scores_rating: number | null
  review_scores_accuracy: number | null
  review_scores_cleanliness: number | null
  review_scores_checkin: number | null
  review_scores_communication: number | null
  review_scores_location: number | null
  review_scores_value: number | null
  license: null
  jurisdiction_names: null
  cancellation_policy: CancellationPolicy
  calculated_host_listings_count: number
  reviews_per_month: number | null
  geolocation: Geolocation
  features: Feature[]
}

export enum Amenity {
  AccessibleHeightBed = "Accessible-height bed",
  AirConditioning = "Air conditioning",
  BBQGrill = "BBQ grill",
  BabyBath = "Baby bath",
  BabyMonitor = "Baby monitor",
  BabysitterRecommendations = "Babysitter recommendations",
  Bathtub = "Bathtub",
  BedLinens = "Bed linens",
  Breakfast = "Breakfast",
  BuzzerWirelessIntercom = "Buzzer/wireless intercom",
  CableTV = "Cable TV",
  CarbonMonoxideDetector = "Carbon monoxide detector",
  CatS = "Cat(s)",
  ChangingTable = "Changing table",
  ChildrenSBooksAndToys = "Children’s books and toys",
  ChildrenSDinnerware = "Children’s dinnerware",
  CoffeeMaker = "Coffee maker",
  CookingBasics = "Cooking basics",
  Crib = "Crib",
  DisabledParkingSpot = "Disabled parking spot",
  DishesAndSilverware = "Dishes and silverware",
  Dishwasher = "Dishwasher",
  DogS = "Dog(s)",
  Doorman = "Doorman",
  DoormanEntry = "Doorman Entry",
  Dryer = "Dryer",
  ElevatorInBuilding = "Elevator in building",
  Essentials = "Essentials",
  ExtraPillowsAndBlankets = "Extra pillows and blankets",
  FamilyKidFriendly = "Family/kid friendly",
  FireExtinguisher = "Fire extinguisher",
  FireplaceGuards = "Fireplace guards",
  FirmMatress = "Firm matress",
  FirstAidKit = "First aid kit",
  FlatSmoothPathwayToFrontDoor = "Flat smooth pathway to front door",
  FreeParkingOnPremises = "Free parking on premises",
  FreeParkingOnStreet = "Free parking on street",
  GameConsole = "Game console",
  GardenOrBackyard = "Garden or backyard",
  Gym = "Gym",
  HairDryer = "Hair dryer",
  Hangers = "Hangers",
  Heating = "Heating",
  HighChair = "High chair",
  HotTub = "Hot tub",
  HotWater = "Hot water",
  IndoorFireplace = "Indoor fireplace",
  Internet = "Internet",
  Iron = "Iron",
  Keypad = "Keypad",
  Kitchen = "Kitchen",
  LaptopFriendlyWorkspace = "Laptop friendly workspace",
  LockOnBedroomDoor = "Lock on bedroom door",
  Lockbox = "Lockbox",
  LongTermStaysAllowed = "Long term stays allowed",
  LuggageDropoffAllowed = "Luggage dropoff allowed",
  Microwave = "Microwave",
  OtherPetS = "Other pet(s)",
  OutletCovers = "Outlet covers",
  Oven = "Oven",
  PackNPlayTravelCrib = "Pack ’n Play/travel crib",
  PathToEntranceLitAtNight = "Path to entrance lit at night",
  PatioOrBalcony = "Patio or balcony",
  PetsAllowed = "Pets allowed",
  PetsLiveOnThisProperty = "Pets live on this property",
  Pool = "Pool",
  PrivateEntrance = "Private entrance",
  PrivateLivingRoom = "Private living room",
  Refrigerator = "Refrigerator",
  RoomDarkeningShades = "Room-darkening shades",
  SafetyCard = "Safety card",
  SelfCheckIn = "Self Check-In",
  Shampoo = "Shampoo",
  SingleLevelHome = "Single level home",
  Smartlock = "Smartlock",
  SmokeDetector = "Smoke detector",
  SmokingAllowed = "Smoking allowed",
  StairGates = "Stair gates",
  StepFreeAccess = "Step-free access",
  Stove = "Stove",
  SuitableForEvents = "Suitable for events",
  TableCornerGuards = "Table corner guards",
  The24HourCheckIn = "24-hour check-in",
  TranslationMissingEnHostingAmenity49 = "translation missing: en.hosting_amenity_49",
  TranslationMissingEnHostingAmenity50 = "translation missing: en.hosting_amenity_50",
  Tv = "TV",
  Washer = "Washer",
  WheelchairAccessible = "Wheelchair accessible",
  WideClearanceToBed = "Wide clearance to bed",
  WideClearanceToShowerAndToilet = "Wide clearance to shower and toilet",
  WideDoorway = "Wide doorway",
  WideHallwayClearance = "Wide hallway clearance",
  WindowGuards = "Window guards",
  WirelessInternet = "Wireless Internet",
}

export enum BedType {
  Couch = "Couch",
  Futon = "Futon",
  PullOutSofa = "Pull-out Sofa",
  RealBed = "Real Bed",
}

export enum CalendarUpdated {
  AWeekAgo = "a week ago",
  The1WeekAgo = "1 week ago",
  The22MonthsAgo = "22 months ago",
  The2DaysAgo = "2 days ago",
  The2MonthsAgo = "2 months ago",
  The2WeeksAgo = "2 weeks ago",
  The3DaysAgo = "3 days ago",
  The3MonthsAgo = "3 months ago",
  The3WeeksAgo = "3 weeks ago",
  The4DaysAgo = "4 days ago",
  The4MonthsAgo = "4 months ago",
  The4WeeksAgo = "4 weeks ago",
  The5DaysAgo = "5 days ago",
  The5MonthsAgo = "5 months ago",
  The5WeeksAgo = "5 weeks ago",
  The6DaysAgo = "6 days ago",
  The6WeeksAgo = "6 weeks ago",
  The7MonthsAgo = "7 months ago",
  The7WeeksAgo = "7 weeks ago",
  The9MonthsAgo = "9 months ago",
  Today = "today",
  Yesterday = "yesterday",
}

export enum CancellationPolicy {
  Flexible = "flexible",
  Moderate = "moderate",
  Strict = "strict",
  SuperStrict60 = "super_strict_60",
}

export enum City {
  Berlin = "Berlin",
  Wannsee = "Wannsee",
}

export enum Country {
  Germany = "Germany",
}

export enum CountryCode {
  De = "DE",
}

export enum ExperiencesOffered {
  None = "none",
}

export enum Feature {
  HostHasProfilePic = "Host Has Profile Pic",
  HostIdentityVerified = "Host Identity Verified",
  HostIsSuperhost = "Host Is Superhost",
  InstantBookable = "Instant Bookable",
  IsLocationExact = "Is Location Exact",
  RequireGuestPhoneVerification = "Require Guest Phone Verification",
  RequireGuestProfilePicture = "Require Guest Profile Picture",
}

export interface Geolocation {
  lon: number
  lat: number
}

export enum HostResponseTime {
  WithinAnHour = "within an hour",
}

export enum HostVerification {
  Amex = "amex",
  Email = "email",
  Facebook = "facebook",
  Google = "google",
  GovernmentID = "government_id",
  IdentityManual = "identity_manual",
  Jumio = "jumio",
  Kba = "kba",
  Linkedin = "linkedin",
  ManualOffline = "manual_offline",
  ManualOnline = "manual_online",
  OfflineGovernmentID = "offline_government_id",
  Phone = "phone",
  Reviews = "reviews",
  Selfie = "selfie",
  WorkEmail = "work_email",
}

export enum NeighbourhoodGroupCleansed {
  CharlottenburgWilm = "Charlottenburg-Wilm.",
  FriedrichshainKreuzberg = "Friedrichshain-Kreuzberg",
  Lichtenberg = "Lichtenberg",
  MarzahnHellersdorf = "Marzahn - Hellersdorf",
  Mitte = "Mitte",
  Neukölln = "Neukölln",
  Pankow = "Pankow",
  Reinickendorf = "Reinickendorf",
  Spandau = "Spandau",
  SteglitzZehlendorf = "Steglitz - Zehlendorf",
  TempelhofSchöneberg = "Tempelhof - Schöneberg",
  TreptowKöpenick = "Treptow - Köpenick",
}

export interface PictureURL {
  thumbnail: boolean
  filename: string
  format: Format
  width: number
  mimetype: Mimetype
  etag: string
  id: string
  last_synchronized: Date
  color_summary: string[]
  height: number
}

export enum Format {
  JPEG = "JPEG",
}

export enum Mimetype {
  ImageJPEG = "image/jpeg",
}

export enum PropertyType {
  Apartment = "Apartment",
  BedBreakfast = "Bed & Breakfast",
  Bungalow = "Bungalow",
  Cabin = "Cabin",
  Condominium = "Condominium",
  House = "House",
  Loft = "Loft",
  Other = "Other",
  ServicedApartment = "Serviced apartment",
  Townhouse = "Townhouse",
  VacationHome = "Vacation home",
}

export enum RoomType {
  EntireHomeApt = "Entire home/apt",
  PrivateRoom = "Private room",
  SharedRoom = "Shared room",
}

export enum SmartLocation {
  BerlinGermany = "Berlin, Germany",
  SmartLocationBerlinGermany = "Berlin , Germany",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toListing(json: string): IListing[] {
    return cast(JSON.parse(json), a(r("Listing")))
  }

  public static listingToJson(value: IListing[]): string {
    return JSON.stringify(uncast(value, a(r("Listing"))), null, 2)
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ)
  const parentText = parent ? ` on ${parent}` : ""
  const keyText = key ? ` for key "${key}"` : ""
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  )
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a)
        })
        .join(", ")}]`
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal
  } else {
    return typeof typ
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }))
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }))
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = ""
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val
    return invalidValue(typ, val, key, parent)
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent)
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val
    return invalidValue(
      cases.map((a) => {
        return l(a)
      }),
      val,
      key,
      parent
    )
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent)
    return val.map((el) => transform(el, typ, getProps))
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null
    }
    const d = new Date(val)
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent)
    }
    return d
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent)
    }
    const result: any = {}
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined
      result[prop.key] = transform(v, prop.typ, getProps, key, ref)
    })
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref)
      }
    })
    return result
  }

  if (typ === "any") return val
  if (typ === null) {
    if (val === null) return val
    return invalidValue(typ, val, key, parent)
  }
  if (typ === false) return invalidValue(typ, val, key, parent)
  let ref: any = undefined
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref
    typ = typeMap[typ.ref]
  }
  if (Array.isArray(typ)) return transformEnum(typ, val)
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val)
  return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps)
}

function l(typ: any) {
  return { literal: typ }
}

function a(typ: any) {
  return { arrayItems: typ }
}

function u(...typs: any[]) {
  return { unionMembers: typs }
}

function o(props: any[], additional: any) {
  return { props, additional }
}

function m(additional: any) {
  return { props: [], additional }
}

function r(name: string) {
  return { ref: name }
}

const typeMap: any = {
  Listing: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "listing_url", js: "listing_url", typ: "" },
      { json: "scrape_id", js: "scrape_id", typ: "" },
      { json: "last_scraped", js: "last_scraped", typ: Date },
      { json: "name", js: "name", typ: "" },
      { json: "summary", js: "summary", typ: u(null, "") },
      { json: "space", js: "space", typ: u(null, "") },
      { json: "description", js: "description", typ: "" },
      {
        json: "experiences_offered",
        js: "experiences_offered",
        typ: r("ExperiencesOffered"),
      },
      {
        json: "neighborhood_overview",
        js: "neighborhood_overview",
        typ: u(null, ""),
      },
      { json: "notes", js: "notes", typ: u(null, "") },
      { json: "transit", js: "transit", typ: u(null, "") },
      { json: "access", js: "access", typ: u(null, "") },
      { json: "interaction", js: "interaction", typ: u(null, "") },
      { json: "house_rules", js: "house_rules", typ: u(null, "") },
      { json: "thumbnail_url", js: "thumbnail_url", typ: u(null, "") },
      { json: "medium_url", js: "medium_url", typ: u(null, "") },
      { json: "picture_url", js: "picture_url", typ: u(r("PictureURL"), null) },
      { json: "xl_picture_url", js: "xl_picture_url", typ: u(null, "") },
      { json: "host_id", js: "host_id", typ: "" },
      { json: "host_url", js: "host_url", typ: "" },
      { json: "host_name", js: "host_name", typ: "" },
      { json: "host_since", js: "host_since", typ: Date },
      { json: "host_location", js: "host_location", typ: u(null, "") },
      { json: "host_about", js: "host_about", typ: u(null, "") },
      {
        json: "host_response_time",
        js: "host_response_time",
        typ: r("HostResponseTime"),
      },
      { json: "host_response_rate", js: "host_response_rate", typ: 0 },
      { json: "host_acceptance_rate", js: "host_acceptance_rate", typ: null },
      { json: "host_thumbnail_url", js: "host_thumbnail_url", typ: "" },
      { json: "host_picture_url", js: "host_picture_url", typ: "" },
      {
        json: "host_neighbourhood",
        js: "host_neighbourhood",
        typ: u(null, ""),
      },
      { json: "host_listings_count", js: "host_listings_count", typ: 0 },
      {
        json: "host_total_listings_count",
        js: "host_total_listings_count",
        typ: 0,
      },
      {
        json: "host_verifications",
        js: "host_verifications",
        typ: a(r("HostVerification")),
      },
      { json: "street", js: "street", typ: "" },
      { json: "neighbourhood", js: "neighbourhood", typ: u(null, "") },
      { json: "neighbourhood_cleansed", js: "neighbourhood_cleansed", typ: "" },
      {
        json: "neighbourhood_group_cleansed",
        js: "neighbourhood_group_cleansed",
        typ: r("NeighbourhoodGroupCleansed"),
      },
      { json: "city", js: "city", typ: r("City") },
      { json: "state", js: "state", typ: u(r("City"), null) },
      { json: "zipcode", js: "zipcode", typ: u(null, "") },
      { json: "market", js: "market", typ: u(r("City"), null) },
      { json: "smart_location", js: "smart_location", typ: r("SmartLocation") },
      { json: "country_code", js: "country_code", typ: r("CountryCode") },
      { json: "country", js: "country", typ: r("Country") },
      { json: "latitude", js: "latitude", typ: "" },
      { json: "longitude", js: "longitude", typ: "" },
      { json: "property_type", js: "property_type", typ: r("PropertyType") },
      { json: "room_type", js: "room_type", typ: r("RoomType") },
      { json: "accommodates", js: "accommodates", typ: 0 },
      { json: "bathrooms", js: "bathrooms", typ: u(3.14, null) },
      { json: "bedrooms", js: "bedrooms", typ: u(0, null) },
      { json: "beds", js: "beds", typ: 0 },
      { json: "bed_type", js: "bed_type", typ: r("BedType") },
      { json: "amenities", js: "amenities", typ: a(r("Amenity")) },
      { json: "square_feet", js: "square_feet", typ: u(0, null) },
      { json: "price", js: "price", typ: 0 },
      { json: "weekly_price", js: "weekly_price", typ: u(0, null) },
      { json: "monthly_price", js: "monthly_price", typ: u(0, null) },
      { json: "security_deposit", js: "security_deposit", typ: u(0, null) },
      { json: "cleaning_fee", js: "cleaning_fee", typ: u(0, null) },
      { json: "guests_included", js: "guests_included", typ: 0 },
      { json: "extra_people", js: "extra_people", typ: 0 },
      { json: "minimum_nights", js: "minimum_nights", typ: 0 },
      { json: "maximum_nights", js: "maximum_nights", typ: 0 },
      {
        json: "calendar_updated",
        js: "calendar_updated",
        typ: r("CalendarUpdated"),
      },
      { json: "has_availability", js: "has_availability", typ: null },
      { json: "availability_30", js: "availability_30", typ: 0 },
      { json: "availability_60", js: "availability_60", typ: 0 },
      { json: "availability_90", js: "availability_90", typ: 0 },
      { json: "availability_365", js: "availability_365", typ: 0 },
      { json: "calendar_last_scraped", js: "calendar_last_scraped", typ: Date },
      { json: "number_of_reviews", js: "number_of_reviews", typ: 0 },
      { json: "first_review", js: "first_review", typ: u(Date, null) },
      { json: "last_review", js: "last_review", typ: u(Date, null) },
      {
        json: "review_scores_rating",
        js: "review_scores_rating",
        typ: u(0, null),
      },
      {
        json: "review_scores_accuracy",
        js: "review_scores_accuracy",
        typ: u(0, null),
      },
      {
        json: "review_scores_cleanliness",
        js: "review_scores_cleanliness",
        typ: u(0, null),
      },
      {
        json: "review_scores_checkin",
        js: "review_scores_checkin",
        typ: u(0, null),
      },
      {
        json: "review_scores_communication",
        js: "review_scores_communication",
        typ: u(0, null),
      },
      {
        json: "review_scores_location",
        js: "review_scores_location",
        typ: u(0, null),
      },
      {
        json: "review_scores_value",
        js: "review_scores_value",
        typ: u(0, null),
      },
      { json: "license", js: "license", typ: null },
      { json: "jurisdiction_names", js: "jurisdiction_names", typ: null },
      {
        json: "cancellation_policy",
        js: "cancellation_policy",
        typ: r("CancellationPolicy"),
      },
      {
        json: "calculated_host_listings_count",
        js: "calculated_host_listings_count",
        typ: 0,
      },
      {
        json: "reviews_per_month",
        js: "reviews_per_month",
        typ: u(3.14, null),
      },
      { json: "geolocation", js: "geolocation", typ: r("Geolocation") },
      { json: "features", js: "features", typ: a(r("Feature")) },
    ],
    false
  ),
  Geolocation: o(
    [
      { json: "lon", js: "lon", typ: 3.14 },
      { json: "lat", js: "lat", typ: 3.14 },
    ],
    false
  ),
  PictureURL: o(
    [
      { json: "thumbnail", js: "thumbnail", typ: true },
      { json: "filename", js: "filename", typ: "" },
      { json: "format", js: "format", typ: r("Format") },
      { json: "width", js: "width", typ: 0 },
      { json: "mimetype", js: "mimetype", typ: r("Mimetype") },
      { json: "etag", js: "etag", typ: "" },
      { json: "id", js: "id", typ: "" },
      { json: "last_synchronized", js: "last_synchronized", typ: Date },
      { json: "color_summary", js: "color_summary", typ: a("") },
      { json: "height", js: "height", typ: 0 },
    ],
    false
  ),
  Amenity: [
    "Accessible-height bed",
    "Air conditioning",
    "BBQ grill",
    "Baby bath",
    "Baby monitor",
    "Babysitter recommendations",
    "Bathtub",
    "Bed linens",
    "Breakfast",
    "Buzzer/wireless intercom",
    "Cable TV",
    "Carbon monoxide detector",
    "Cat(s)",
    "Changing table",
    "Children’s books and toys",
    "Children’s dinnerware",
    "Coffee maker",
    "Cooking basics",
    "Crib",
    "Disabled parking spot",
    "Dishes and silverware",
    "Dishwasher",
    "Dog(s)",
    "Doorman",
    "Doorman Entry",
    "Dryer",
    "Elevator in building",
    "Essentials",
    "Extra pillows and blankets",
    "Family/kid friendly",
    "Fire extinguisher",
    "Fireplace guards",
    "Firm matress",
    "First aid kit",
    "Flat smooth pathway to front door",
    "Free parking on premises",
    "Free parking on street",
    "Game console",
    "Garden or backyard",
    "Gym",
    "Hair dryer",
    "Hangers",
    "Heating",
    "High chair",
    "Hot tub",
    "Hot water",
    "Indoor fireplace",
    "Internet",
    "Iron",
    "Keypad",
    "Kitchen",
    "Laptop friendly workspace",
    "Lock on bedroom door",
    "Lockbox",
    "Long term stays allowed",
    "Luggage dropoff allowed",
    "Microwave",
    "Other pet(s)",
    "Outlet covers",
    "Oven",
    "Pack ’n Play/travel crib",
    "Path to entrance lit at night",
    "Patio or balcony",
    "Pets allowed",
    "Pets live on this property",
    "Pool",
    "Private entrance",
    "Private living room",
    "Refrigerator",
    "Room-darkening shades",
    "Safety card",
    "Self Check-In",
    "Shampoo",
    "Single level home",
    "Smartlock",
    "Smoke detector",
    "Smoking allowed",
    "Stair gates",
    "Step-free access",
    "Stove",
    "Suitable for events",
    "Table corner guards",
    "24-hour check-in",
    "translation missing: en.hosting_amenity_49",
    "translation missing: en.hosting_amenity_50",
    "TV",
    "Washer",
    "Wheelchair accessible",
    "Wide clearance to bed",
    "Wide clearance to shower and toilet",
    "Wide doorway",
    "Wide hallway clearance",
    "Window guards",
    "Wireless Internet",
  ],
  BedType: ["Couch", "Futon", "Pull-out Sofa", "Real Bed"],
  CalendarUpdated: [
    "a week ago",
    "1 week ago",
    "22 months ago",
    "2 days ago",
    "2 months ago",
    "2 weeks ago",
    "3 days ago",
    "3 months ago",
    "3 weeks ago",
    "4 days ago",
    "4 months ago",
    "4 weeks ago",
    "5 days ago",
    "5 months ago",
    "5 weeks ago",
    "6 days ago",
    "6 weeks ago",
    "7 months ago",
    "7 weeks ago",
    "9 months ago",
    "today",
    "yesterday",
  ],
  CancellationPolicy: ["flexible", "moderate", "strict", "super_strict_60"],
  City: ["Berlin", "Wannsee"],
  Country: ["Germany"],
  CountryCode: ["DE"],
  ExperiencesOffered: ["none"],
  Feature: [
    "Host Has Profile Pic",
    "Host Identity Verified",
    "Host Is Superhost",
    "Instant Bookable",
    "Is Location Exact",
    "Require Guest Phone Verification",
    "Require Guest Profile Picture",
  ],
  HostResponseTime: ["within an hour"],
  HostVerification: [
    "amex",
    "email",
    "facebook",
    "google",
    "government_id",
    "identity_manual",
    "jumio",
    "kba",
    "linkedin",
    "manual_offline",
    "manual_online",
    "offline_government_id",
    "phone",
    "reviews",
    "selfie",
    "work_email",
  ],
  NeighbourhoodGroupCleansed: [
    "Charlottenburg-Wilm.",
    "Friedrichshain-Kreuzberg",
    "Lichtenberg",
    "Marzahn - Hellersdorf",
    "Mitte",
    "Neukölln",
    "Pankow",
    "Reinickendorf",
    "Spandau",
    "Steglitz - Zehlendorf",
    "Tempelhof - Schöneberg",
    "Treptow - Köpenick",
  ],
  Format: ["JPEG"],
  Mimetype: ["image/jpeg"],
  PropertyType: [
    "Apartment",
    "Bed & Breakfast",
    "Bungalow",
    "Cabin",
    "Condominium",
    "House",
    "Loft",
    "Other",
    "Serviced apartment",
    "Townhouse",
    "Vacation home",
  ],
  RoomType: ["Entire home/apt", "Private room", "Shared room"],
  SmartLocation: ["Berlin, Germany", "Berlin , Germany"],
}
