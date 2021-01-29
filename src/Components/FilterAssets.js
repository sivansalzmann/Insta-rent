import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

  
const FilterAssets = (props) => {
    const [open, setOpen] = useState(false);
    const [squareFeet, setSquareFeet] = useState("");
    const [rooms, setRooms] = useState("");
    const [condition, setCondition] = useState("");
    const [parking, setParking] = useState("");
    const [elevator, setElevator] = useState("");
    const [pets, setPets] = useState("");
    const [price, setPrice] = useState("");
      

    const filter = () => {
        // const classes = useStyles();

        const filterBy = { SquareFeet: squareFeet };

        fetch(`https://instarent-1st.herokuapp.com/api/assets?SquareFeet=176`)
            .then(response => response.json())
            .then(result => console.log(result))
            // .then(result => {closePopUp()})
        };

        const openPopUp = () => {
            setOpen(true);
        };
    
        const closePopUp = () => {
            setOpen(false);
    
        };

        return (
            <div className="popup">
                <div className="newTask">
                    <Button onClick={openPopUp}>
                        <SearchIcon fontSize="large" />
                    </Button>
                    <Dialog open={open} onClose={closePopUp} aria-labelledby="form-dialog-title">
                        <DialogTitle >Filter assets</DialogTitle>
                        <DialogContent>
                            <TextField autoFocus margin="dense" label="Square feet" type="Name" onChange={e => setSquareFeet(e.target.value)} value={squareFeet} fullWidth/>
                            <FormControlLabel control={<Checkbox onChange={e => setParking(e.target.value)} name="parking" color="primary" value = {parking} />} label="Parking"/>
                            <FormControlLabel control={<Checkbox onChange={e => setElevator(e.target.value)} name="elevator" color="primary" value = {elevator} />} label="Elevator"/>
                            <FormControlLabel control={<Checkbox onChange={e => setPets(e.target.value)} name="pets" color="primary" value = {pets} />} label="Pets"/>
                            <FormControl > 
                        <InputLabel htmlFor="age-native-simple">Rooms</InputLabel>
                        <Select native value={rooms} onChange={e => setRooms(e.target.value)}>
                            <option aria-label="None" value="Rooms" />
                            <option value={1}>1-2</option>
                            <option value={2}>2-3</option>
                            <option value={3}>3-4</option>
                            <option value={3}>4-5</option>
                            <option value={3}>5+</option>
                            </Select>
                        </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button className="buttonOK" variant="contained" color="Primary" onClick={filter} >
                                FILTER
                            </Button>
                            <Button className="buttonCANCEL" variant="contained" color="Primary" onClick={closePopUp}>
                                CANCEL
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    
    }

export default FilterAssets;