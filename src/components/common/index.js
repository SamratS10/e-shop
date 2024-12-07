export const registerFormController = [
    {
        name:"name",
        label:"User Name",
        type:"text",
        placeholder:"Enter your name",
        componentType:"input"
    },
    {
        name:"email",
        label:"Email",
        type:"text",
        placeholder:"Enter your email",
        componentType:"input"
    },
    {
        name:"password",
        label:"Password",
        type:"password",
        placeholder:"Enter your password",
        componentType:"input"
    }
]

export const loginFormController = [
    {
        name:"email",
        label:"Email",
        type:"text",
        placeholder:"Enter your email",
        componentType:"input"
    },
    {
        name:"password",
        label:"Password",
        type:"password",
        placeholder:"Enter your password",
        componentType:"input"
    }
]

export const addProductFormData = [{
    name:"title",
    label:"Title",
    type:"text",
    placeholder:"Enter title of the product",
    componentType:"input"
},{
    name:"description",
    label:"Description",
    //type:"text",
    placeholder:"Enter product description",
    componentType:"textarea"
},{
    name:"category",
    label:"Category",
    componentType:"select",
    options:[{
        id:"men",label:"Men"
    },{
        id:"women",label:"Women"
    },{
        id:"kids",label:"Kids"
    },{
        id:"accessories",label:"Accessories"
    },{
        id:"footwear",label:"Footwear"
    }]
},{
    name:"brand",
    label:"Brand",
    componentType:"select",
    options:[{
        id:"puma",label:"Puma"
    },{
        id:"nike",label:"Nike"
    },{
        id:"addidas",label:"Addidas"
    },{
        id:"zara",label:"Zara"
    },{
        id:"asics",label:"Asics"
    }]
},{
    name:"price",
    label:"Price",
    componentType:"input",
    type:"number",
    placeholder:"Enter product price"
},{
    name:"salePrice",
    label:"Sales Price",
    componentType:"input",
    type:"number",
    placeholder:"Enter product sales price(optional)"
}]