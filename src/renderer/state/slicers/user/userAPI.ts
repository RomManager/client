import axios from 'axios'

export async function loginAPICall({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<boolean | string> {
  try {
    const { data, status } = await axios.post<{ token: string }>('/login', {
      email: email,
      password: password,
    })

    if (status != 200) {
      return false
    }

    console.log('This is the JWT token: ' + data.token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token

    return true
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message)
      console.log(error)
      return false
    } else {
      console.log('unexpected error: ', error)
      return 'An unexpected error occurred'
    }
  }
}
