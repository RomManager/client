import axios from 'axios'
import { Rom } from './dataSlice'

type RomResponse = {
  emulator: string
  grid_url: string
  id: number
  name: string
  release_date: Date
  steamgriddb_id: number
}

export async function getAllRomsAPICall(): Promise<Array<Rom>> {
  try {
    const { data } = await axios.get<{ data: Array<RomResponse> }>('/roms')
    const newData: Array<Rom> = []

    data.data.map(rom => {
      newData.push({
        emulator: rom.emulator,
        gridUrl: rom.grid_url,
        romName: rom.name,
        releaseDate: rom.release_date,
      })
    })

    return newData
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('unexpected error: ', error)
      return []
    }
  }
}
