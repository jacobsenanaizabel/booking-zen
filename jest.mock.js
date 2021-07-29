import * as Snackbar from 'react-simple-snackbar'

const openSnackbarMock = jest.fn()
const closeSnackbarMock = jest.fn()


jest.spyOn(Snackbar, 'useSnackbar').mockImplementation(() => [openSnackbarMock, closeSnackbarMock])


// jest.mock('@apollo/client', () => ({
//     useQuery: jest.fn(),
//     gql: jest.fn(),
//   }));
