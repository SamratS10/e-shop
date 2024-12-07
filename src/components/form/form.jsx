import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


const Form =({formControllers,buttonText,onSubmit,setFormData,formData})=>{
    function renderComponent(comp){
        let element = null 
        const value = formData[comp.name] || ""

        switch(comp.componentType){
            case "input":
                element = (<Input 
                name={comp.name}
                placeholder={comp.placeholder}
                id={comp.name}
                type = {comp.type}
                value = {value}
                onChange = {(event)=>
                    setFormData({...formData,[comp.name]:event.target.value})
                }
                />)
            break;
            case "textarea":
                element = (<Textarea
                name={comp.name}
                placeholder={comp.placeholder}
                id={comp.id}
                value={value}
                onChange = {(event)=>
                    setFormData({...formData,[comp.name]:event.target.value})
                }
                // type = {comp.type}
                />)
            break;
            case "select":
                element = (<Select onValueChange={(val)=>setFormData({...formData,[comp.name]:val})} value={formData[comp.name] || ""}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={comp.label}/>
                    </SelectTrigger>
                    <SelectContent> 
                        {
                        comp.options && comp.options.length > 0 ? comp.options.map((op)=><SelectItem key={op.id} value={op.label}>{op.label}</SelectItem>) : null
                    }
                    </SelectContent>
                </Select>)
            break;
            default:
                element = (<Input 
                    name={comp.name}
                    placeholder={comp.placeholder}
                    id={comp.name}
                    type = {comp.type}
                    value = {value}
                    onChange = {(event)=>
                        setFormData({...formData,[comp.name]:event.target.value})
                    }
                    />) 
        }
        return element
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-1">
                {
                    formControllers.map((each)=><div key={each.name} className="m-1">
                        <Label className="mb-2">{each.label}</Label>
                        {
                            renderComponent(each)
                        }
                    </div>)
                }
            </div>
            <Button type="submit" className="mt-2 w-full">{buttonText || "Submit"}</Button>
        </form>
    )
}

export default Form