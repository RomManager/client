import PageWithSideBar from '@components/pageTemplates/PageWithSideBar'
import BoxButton from '@components/utils/BoxButton'
import { Rom } from '@renderer/state/slicers/data/dataSlice'
import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router'

export default function GamePage() {
  const { state: game }: { state: Rom } = useLocation()

  return (
    <PageWithSideBar>
      <div className="flex flex-row m-10">
        <div className="w-56 h-[370px] flex flex-col">
          <img
            className="w-56 h-[336px] max-w-min rounded-t-lg"
            src={`${axios.defaults.baseURL}/rom/${game.id}/grid`}
            alt={game.romName}
          />
          <div className="grid h-full place-content-center bg-gray-1 bg-opacity-90 rounded-b-lg">
            <span className="text-gray-8 text-center text-xs font-sans">
              42 hours played
            </span>
          </div>
        </div>
        <div className="ml-5 flex flex-col overflow-hidden">
          <span className="text-white text-lg font-sans font-bold text-ellipsis">
            {game.romName}
          </span>
          <span className="text-gray-10 text-base font-sans font-semibold text-ellipsis">
            {game.emulator}
          </span>
          <div className="mt-2">
            <BoxButton
              text="Play Now"
              onClick={() => {
                console.log('clicked')
              }}
            />{' '}
            {/* TODO: Create light box button version*/}
          </div>
          <div className="w-[550px] mt-3">
            <p className="text-gray-9 font-sans font-light leading-snug text-ellipsis">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              odio accusantium quae obcaecati reiciendis recusandae saepe nemo?
              Veniam rerum expedita porro quam sapiente dolore eos? Blanditiis
              aut molestias culpa. Dolore veritatis sit impedit omnis quae harum
              ipsa, consectetur aliquid voluptatibus reiciendis mollitia
              asperiores nam aspernatur facere perspiciatis inventore ea
              repudiandae. Explicabo ipsum, aspernatur dicta vitae veniam
              accusantium at cumque, beatae, facilis quo atque illum!
            </p>
          </div>
        </div>
      </div>
    </PageWithSideBar>
  )
}
