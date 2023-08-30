import EventCard from './subComponent/EventCard';
import {
  ellipses,
  exercise,
  play,
  selfCare,
  social,
  study,
  work,
  jeremy
} from '../assets'

const icons = [work, play, study, exercise, social, selfCare, ellipses, jeremy]

type EventProps = {
  active: string,
}

const Events: React.FC<EventProps> = ({active}) => {
  const listOfEvents = ["work", "play", "study", "exercise", "social", "care"]

  return (
    <div className="events-wrapper">
      {
        listOfEvents.map((event, index) => (
          <EventCard event={event} active={active} key={index} icon={icons[index]}/>
        ))
      }
    </div>
  )
}

export default Events
