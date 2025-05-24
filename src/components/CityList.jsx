import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext'

/* eslint-disable react/prop-types */
function CityList() {
    const { cities , isLoading } = useCities()


    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Add your first city by clicking on a city on the map' />
    
    return (
        <ul className={styles.cityList}>
            {cities.map(city => <CityItem city={city} key={city.id} />)}
        </ul>
    )
}
/* eslint-enable react/prop-types */

export default CityList
