import React from 'react'

const publicationsData = [
    {
        Authors: "M Mandal, V Dhar, A Mishra, SK Vipparthi, M Abdel-Mottaleb",
        Title: "3DCD: Scene independent end-to-end spatiotemporal feature learning framework for change detection in unseen videos",
        Journal: "IEEE Transactions on Image Processing",
        Year: "2021",
        puburl: "https://ieeexplore.ieee.org/abstract/document/9263106",
        downloadurl: "https://visionintelligence.github.io/assets/publications/3DCD.pdf"
    },
    {
        Authors: "M Mandal, V Dhar, A Mishra, SK Vipparthi",
        Title: "3DFR: A swift 3D feature reductionist framework for scene independent change detection",
        Journal: "IEEE Signal Processing Letters",
        Year: "2019",
        puburl: "https://ieeexplore.ieee.org/abstract/document/8894435",
        downloadurl: "https://arxiv.org/ftp/arxiv/papers/1912/1912.11891.pdf"
    }
]
    


const Publication = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" id="#publications">

        {/* <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            
        </div> */}
        

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h1 className="text-white text-4xl font-bold mb-4">Publications</h1>
            {publicationsData.map((publication, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-left mb-4">
                            <h2 className="text-white text-xl font-bold">
                                <a href={publication.puburl}>{publication.Title}</a>
                            </h2>
                            <h4 className="text-white text-sm">{publication.Authors}</h4>
                            <h4 className="text-[#656565] text-sm">{publication.Journal}</h4>
                            <h4 className="text-[#ADB7BE] text-base">
                                {publication.Year}
                                {" "}
                                <a href={publication.downloadurl} className="text-purple-300">[PDF]</a>
                            </h4>
                        </div>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default Publication