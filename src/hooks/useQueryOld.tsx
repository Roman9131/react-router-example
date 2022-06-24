import {useCallback, useMemo} from "react"
import {useLocation, useHistory} from "react-router-dom"
import qs from "query-string"

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
	const {search} = useLocation();
	const history = useHistory();
	
	const params = useMemo(() => qs.parse(search), [search]);
	
	const setQueryString = useCallback((params: Record<string, string>) => {
		const search = qs.stringify(params)
		history.replace({search})
	}, [history])
	
	return [params, setQueryString];
}