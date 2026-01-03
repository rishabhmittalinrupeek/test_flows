const access_token = TOKEN;
const userID = ""
const baseURL = "https://quick-qa.rupeek.co"

if (!access_token) {
    throw new Error("TOKEN is missing");
}

const response = http.get(
    `${baseURL}/offers/customer/${userID}/hasActiveOffer`,
    {
        headers: {
            Authorization: `JWT ${access_token}`,
            Accept: "application/json"  
        }
    }
);

if (response.status !== 200) {
    console.log("Status: " + response.status);
    console.log("Error: " + response.body);
}

output.status = response.status;
output.body = json(response.body);
console.log(output.body.hasActiveOffer)