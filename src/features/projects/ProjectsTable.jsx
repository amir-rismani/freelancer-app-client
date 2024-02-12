import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import toLocalDateString from "../../utils/toLocaleDateString";
import { toPersianNumbersWithCommas } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { useOwnerProjects } from "./useOwnerProjects"

function ProjectsTable() {
    // const { isLoading, projects } = useOwnerProjects();
    // console.log(projects)
    // if (isLoading) return <Loader />
    // if (!projects.length) return <Empty resourceName="پروژه" />
    return (
        <div className="bg-secondary-0 overflow-x-auto">
            <table width="100%">
                <thead className="text-right border-b border-stroke">
                    <tr>
                        <th>#</th>
                        <th>عنوان</th>
                        <th>دسته بندی</th>
                        <th>بودجه</th>
                        <th>ددلاین</th>
                        <th>تگ‌ها</th>
                        <th>فریلنسر</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td>1</td>
                        <td>{truncateText('برنامه نویسی React', 30)}</td>
                        <td>برنامه نویسی</td>
                        <td>{toPersianNumbersWithCommas(3500000)}</td>
                        <td>{toLocalDateString("2024-02-12T13:51:08.156Z")}</td>
                        <td className="flex flex-wrap"><span className="badge badge--tag">فرانت اند</span><span>برنامه نویسی</span></td>
                        <td>امیر علوی</td>
                        <td><span className="badge badge--error ">بسته</span></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>برنامه نویسی Python</td>
                        <td>برنامه نویسی</td>
                        <td>2500000</td>
                        <td>{toLocalDateString("2024-02-12T13:51:08.156Z")}</td>
                        <td><span>بک اند</span><span>برنامه نویسی</span></td>
                        <td>امیر علوی</td>
                        <td><span className="badge badge--success">باز</span></td>
                        <td>...</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ProjectsTable