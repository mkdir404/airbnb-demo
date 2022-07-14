import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from '../components/Map'

function Search({ searchResults }:any) {
    
    const router = useRouter();
    const {location , startDate , endDate , noOfGuests}:any = router.query;

    const formatStartDate = format( new Date(startDate) , "dd MM yy" )
    const formatEndDate = format( new Date(endDate) , "dd MM yy" )
    const range = `${formatStartDate} - ${formatEndDate}`

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} gests `} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancelation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Bends</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                            {
                                searchResults.map(({img ,title,location , description , star , price , total }:any) => (
                                    <InfoCard 
                                        key={img}
                                        img={img}
                                        location={location}
                                        title={title}
                                        description = {description}
                                        star={star}
                                        price={price}
                                        total={total}
                                    />
                                ))
                            }
                    </div>

                </section>

                <section className="hidden xl:inline-flex">
                    <Map searchResult={searchResults} />    
                    <p>2</p>                
                </section>

            </main>
        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then(res => res.json());

    return {
        props :{
            searchResults,
        }
    }
}