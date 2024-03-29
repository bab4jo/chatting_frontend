import { useMutation } from '@tanstack/react-query'
import { createRoom } from './chat'
import { useSetAtom } from 'jotai'
import { roomAtom } from './chatRoomAtom'

export const useCreateRoom = () => {
  const addRoom = useSetAtom(roomAtom)

  const { mutate, data, isPending, isSuccess } = useMutation({
    mutationKey: ['createRoom'],
    mutationFn: createRoom,
    onSuccess: item => {
      console.log(item)
      addRoom(room => [...room, item])
    },
    onError: error => console.log(error),
  })

  const createRoomHandler = () => mutate()

  return { createRoomHandler, data, isPending, isSuccess } as const
}
