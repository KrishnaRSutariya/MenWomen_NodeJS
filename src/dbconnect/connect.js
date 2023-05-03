const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://krishnarsutariyarskd154:krishnarsutariyarskd154@cluster.zyhwqjh.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("mongodb is connected");
}).catch(() => {
    console.log("mongodb is not connected");
});