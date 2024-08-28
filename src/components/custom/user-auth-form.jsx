import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

import { Input } from '@/components/ui/Input'; // Adjust the path to your input component
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '@/store/userSlice';

const formSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' }),
    name: z.string().nonempty({ message: 'Enter your name' })
});

export default function UserAuthForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    let {name, email} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const defaultValues = {
        email: email,
        name: name,
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues
    });

    const onSubmit = async (data) => {
        // Handle sign in logic here
        console.log('Form submitted:', data);
        setLoading(true);
        dispatch(updateUser({name : data.name, email : data.email}));

        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1000)

    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2"
                >

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Enter your name..."
                                        disabled={loading}
                                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="email"
                        className="border border-red-400"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email..."
                                        disabled={loading}
                                        {...field}
                                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button disabled={loading} className="ml-auto w-full" type="submit">
                        {
                            loading ? (
                                <Loader className='h-4 w-4 animate-spin'/>
                            ) : (
                                'Continue With Email'
                            )
                        }

                    </Button>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
            </div>
        </>
    );
}
