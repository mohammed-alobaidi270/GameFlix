import useData from "./useData";

export interface Platform {
    id:        number;
    name:      string;
    slug:      string;
    // platforms: Platform[];
}

// export interface Platform {
//     id:               number;
//     name:             string;
//     slug:             string;
//     games_count:      number;
//     image_background: string;
//     image:            string;
//     year_start:       number;
//     year_end:         number;
// }

function usePlatforms() {
 return useData<Platform>('/platforms/lists/parents')
}
    

export default usePlatforms;
