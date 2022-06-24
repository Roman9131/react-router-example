import {FC} from "react"

type Props = {
	value: number
}

export const OtherComponent: FC = () => {
	return <div>Other Component</div>
}

const SomeComponent: FC<Props> = ({value}) => {
	return <div>200 + {value}</div>
}


export const SomeModule: FC = () => {
	return <SomeComponent value={100}/>;
};

export default SomeModule;