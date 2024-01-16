import { ThreeDots } from 'react-loader-spinner'

function Loader({ height = '40', width = '80' }) {
    return <ThreeDots
        visible={true}
        color="rgb(var(--color-primary))"
        height={height}
        width={width}
        radius="9"
        wrapperStyle={{ display: 'flex', justifyContent: "center" }}
    />
}

export default Loader