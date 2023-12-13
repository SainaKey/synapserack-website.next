import React from 'react'

const Footer = () =>{
    return (
        <footer className="bg-neutral-900 text-white py-4 px-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 px-2">
              <p className="text-xl">About SynapseRack</p>
                <p className="mt-1">
                    VJ software that allows you to combine layers and modules.
                </p>
            </div>
            <div className="md:w-1/2 px-2 mt-4 md:mt-0">
              <p className="text-xl">SainaKey</p>
                <p className="mt-1">
                Portfolio:<a className="text-blue-300 underline" href="https://www.sainakey.com/">https://www.sainakey.com/</a><br/>
                Twitter:<a className="text-blue-300 underline" href="https://x.com/SainaKey">@SainaKey</a>
                </p>
            </div>
          </div>
          <div className="text-right mr-10 mt-4">
            <p>Copyright © 2023 SainaKey. Powerd by Gatsby.js</p>
          </div>
        </footer>
      );
}

export default Footer