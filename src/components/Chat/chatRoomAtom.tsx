import { atomWithStorage } from 'jotai/utils'
import { RoomType } from './roomType'

export const roomAtom = atomWithStorage<Array<RoomType>>('roomList', [])
