import React from 'react'
import { Loader2, Annoyed } from "lucide-react";

const ArticleViewer = ({ articles, isLoading, error }) => {

  

  return (
    <section className="h-[400px] overflow-y-auto space-y-2 bg-[#F5F4F2] border border-[#d3d3d3] rounded-lg p-4 mb-10 ">

      {/* if articles are being fetched */}
      {isLoading &&  <div className="w-full h-full flex justify-center items-center">
          <Loader2 data-testid="loader" className="animate-spin w-[7rem] h-[7rem] text-[#B1ADA0]" />
        </div> 
      }

      {/* if there's an error */}
      {error &&  <div className="flex h-full w-full justify-center items-center flex-col text-[#B1ADA0]">
            <Annoyed className="w-[7rem] h-[7rem]"/>
            <p className="">Issue with the server...</p>
            </div>
      }


      {/* if there's no error and nothing is being fetched */}
      {!isLoading && !error && <div className="w-full h-full">

          {/* if there are no articles and none are being fetched then display the following msg */}
          {articles.length === 0 && !isLoading && !error && <p className="text-[#B1AD9F]">Please click button on the left/top to view articles inside me...</p>}

          {/* displaying fetched articles */}
          {articles.map((article, index) => (
              <article 
              className="cursor-pointer"
              key={article.title} 
              role="article" 
              >
                <a href={article.link}  target="_blank">
                <h3 className="text-[0.9rem] mb-0.5 text-[#2A261B]"><span className="mr-1">{index + 1}.</span>{article.title}</h3>
                <p className="text-[0.6rem] mb-4 text-[#737163]">{article.posted}</p>
                </a>
              </article>
            ))}
        </div>
        }
     
    </section>
         
  )
}

export default ArticleViewer