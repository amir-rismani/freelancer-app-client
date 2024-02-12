import { useQuery } from "@tanstack/react-query";
import { getOwnerProjects } from "../../services/projectsServices";

export function useOwnerProjects() {
    const { data, isLoading } = useQuery({
        queryKey: ['owner-projects'],
        queryFn: getOwnerProjects,
        retry: false
    });

    console.log(data, isLoading);

    const { projects } = data || {};

    return { isLoading, projects }
}