
export function Business(){
    return(
        <>
        <div className="d-flex justify-content-center-row"><h1>Attract New Customers on Sulekha</h1>
        <div>
            <form>
                <h1>Build a Professinal Profile</h1>
                <input 
                    type="text" 
                    placeholder="What service do you provide?" 
                    value="" name="servicename"/><br/>
                <input 
                    type="number"
                    placeholder="Mobile Number"
                    value="" name="mobilenumber"/><br/>
                <input type="text" 
                    placeholder="City"
                    value="" name="city"/><br/>
                <button>Submit</button>
        <p>Already Registered?</p><input type="submit" value="Sign In"/>  
            </form>
        </div>
        </div>        
        </>
    )
}