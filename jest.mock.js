import * as Snackbar from 'react-simple-snackbar'

const openSnackbarMock = jest.fn()
const closeSnackbarMock = jest.fn()  

jest.spyOn(Snackbar, 'useSnackbar').mockImplementation(() => [openSnackbarMock, closeSnackbarMock])


jest.mock("@components/atoms/Rating", () => {
    return {
      __esModule: true,
      default: () => {
        return <div>Stars</div>;
      },
    };
});
