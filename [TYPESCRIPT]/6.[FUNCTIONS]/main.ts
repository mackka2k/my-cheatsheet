type TypeChannelReturn = {
	name: string
}

function getChannel(name: string): TypeChannelReturn {
	return { name }
}

type TypeChannelFn = (name: string) => TypeChannelReturn

const getChannelName = (name: string): TypeChannelReturn => {
	return { name }
}
