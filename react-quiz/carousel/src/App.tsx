import { ImageSlider } from "./ImageSlider"
import car1 from "./images/car-1.jpg"
import car2 from "./images/car-2.jpg"
import car3 from "./images/car-3.jpg"
import car4 from "./images/car-4.jpg"
import car5 from "./images/car-5.jpg"


const IMAGES = [
    {url: car1, alt: "car One" , content: "Nearly 900 Million Oil Changes Are Performed Each Year Getting your oil changed regularly is very important. We recommend changing your oil every 3,000-5,000 miles. To learn more about how to check your oil, click here!"},
    {url: car2, alt: "car Two", content: "The Average Car Owner Spends About $400 On Diagnostics, Scheduled Maintenance, and Tune-Ups Every Year If you own a vehicle, odds are you will be spending about 400 a year on maintenance. These maintenance services are very important to the longevity of your vehicle. Avoiding these services could lead to breakdowns or other expensive services."},
    {url: car3, alt: "car Three", content: "60 Billion Dollars Worth Of Car Maintenance Does Unperformed Each Year It is very important to take care of your car's maintenance because unperformed maintenance services can lead to more expensive breakdowns. "},
    {url: car4, alt: "car Four", content: "Cars Are Made Up Of Approximately 30,000 Parts There are so many different parts in a car, it is almost impossible for the average car owner to know all of them. That's why it is so important to hire a knowledgeable technician to repair your car when there is a problem."},
    {url: car5, alt: "car Five", content: "In 2019, The Most Common Reason For An Illuminated Check Engine Light Was A Problem With The Catalytic Converter"},
  
]



export default function App() {
  return (
  <div style={{
  
    width: "100%",
    height: "100%",
    overflow: "hidden",
    margin: "0 auto",
    }}>
    <ImageSlider images={IMAGES} />
  </div>
  )
}