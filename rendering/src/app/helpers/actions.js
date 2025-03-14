"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function counterTrigger() {
  console.log("COUNTER TRIGGER");
}

export async function addEmployee(prevState, formData) {
  // await new Promise((resolve)=>setTimeout(resolve,2000))
  console.log(prevState);

  try {
    if (formData.get("fullname") === "") {
      throw new Error("The name is required");
    }

    await axios.post("http://localhost:3004/employees", {
      fullname: formData.get("fullname"),
      position: formData.get("position"),
      age: formData.get("age"),
    });

    // revalidatePath(`/employees/${formData.id}`);
    // revalidatePath("/");
    // redirect("/");

    return { success: true, message: "Name added" };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

export async function editEmployee(formData) {
  try {
    const { fullname, position, age } = formData;

    if (age < 18) {
      return { error: "You need to be at least 18" };
    }

    const res = await fetch(`http://localhost:3004/employees/${formData.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        position,
        age,
      }),
    });
    if (!res.ok) {
      return { error: `${res.status} ${res.statusText}` };
    }
  } catch (error) {
    return { error: error };
  }
      // revalidatePath(`/employees/${formData.id}`);
    // revalidatePath("/");
    redirect("/");
}

export async function deleteEmployee(ID) {
  await fetch(`http://localhost:3004/employees/${ID}`, {
    method: "DELETE",
  });
//   revalidatePath("/");
  redirect("/");
}
