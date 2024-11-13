import {ChangeEvent} from "react";
import {Autocomplete, Grid2, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {onChangeTvShow, selectTvShow} from "./searchFormSlice.ts";


const SearchForm = () => {
    const dispatch = useAppDispatch();
    const tvShow = useAppSelector(selectTvShow);
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
    ]

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        dispatch(onChangeTvShow(e.currentTarget.value))
        console.log(tvShow);
    }

    return (
        <Grid2 container alignItems="center" spacing={2}>
            <Grid2>
                <Typography variant="body1" component="p">
                    Search for TV Show
                </Typography>
            </Grid2>
            <Grid2>
                <Autocomplete
                    disablePortal
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <
                        TextField
                        value={tvShow}
                        onChange={onChange}
                        name="twShow"
                        {...params}
                        label="Movie"/>}
                />
            </Grid2>
        </Grid2>
    );
};

export default SearchForm;