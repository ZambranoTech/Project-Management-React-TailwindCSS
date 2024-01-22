import Input from "./Input";

export default function NewProject() {
    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-text-stone-900">Cancel</button></li>
            <lib><button className="bg-stone-800">Save</button></lib>
        </menu>
        <div>
           <Input label="Title"/>
           <Input label="Description" textarea/>
           <Input label="Due Date"/>
        </div>
    </div>
}