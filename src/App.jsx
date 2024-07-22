import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from './components/ui/button'
import ArticleViewer from './components/ArticleViewer';
import Navbar from './components/Navbar'


function App() {
  const [ articles, setArticles ] = useState([])
  const [isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const scrapeArticles = async () => {
    setIsLoading(true)

    // every time button is pressed, articles array is emptied
    setArticles([])
    try {
      const response = await axios.get("http://localhost:4000")
     
      const data = response.data
      console.log(data)
      setIsLoading(false)
      setArticles(data)
      console.log("Articles set in state:", data);
    } catch(error) {
      console.error("Error fetching articles:", error);
      setError(true)
      setIsLoading(false)
    } 
  }
      


  return (
    <div className="h-screen w-screen bg-[#F1F0E8]">
      <Navbar />
      <section className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 p-4 gap-4 bg-[#F1F0E8]">
        <div className="">
          <h1 className="mb-2 text-3xl font-bold max-w-[30rem] sm:text-3xl sm:max-w-[35rem] md:text-4xl text-[#3D3929]">Uncover the Hottest Tech Trends:</h1>
          <p className="mb-10 font-semibold text-1xl sm:text-2xl text-[#3D3929]">View the Latest 100 HackerNews Articles with a click</p>
            <Button 
            onClick={() => { scrapeArticles()}}
            className="bg-[#737163] hover:bg-[#535146] font-semibold text-[1.1rem] sm:text-[1.05rem]"
            size="lg"
            >
            Scrape Articles
            </Button>
        </div>

          <ArticleViewer articles={articles} isLoading={isLoading} error={error}/>
      </section>
    </div>
  )
   

}
       
  






export default App
