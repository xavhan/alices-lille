import { eventList, linkToCalendar } from "./events";
import type {Link} from '$data/types'
import { FACEBOOK_URL, LINKS } from "$data/links";

export const links: Link[] = [
  ...eventList.future.flatMap(event => [{
    label: `💃 ${event.label} Event Facebook 🕺`,
    href: event.facebookEvent || FACEBOOK_URL,
  }, {
    label: `🗓 ${event.label} dans GCal 🗓`,
    href: linkToCalendar(event),
  }]),
  ...LINKS
]
