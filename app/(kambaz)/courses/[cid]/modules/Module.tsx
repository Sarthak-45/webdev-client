import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
export default function Module({
  module,
  children,
}: {
  module: CourseModule;
  children?: ReactNode;
}) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-2 rounded border border-neutral-200 bg-neutral-100">
      <div className="wd-title flex items-center justify-between p-3">
        <span className="font-semibold">
          {module.editing ? (
            <input
              className="w-64 rounded border border-neutral-300 px-2 py-1 text-base"
              defaultValue={module.name}
              onChange={(e) =>
                updateModule({ ...module, name: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateModule({ ...module, editing: false });
                }
              }}
              autoFocus
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons moduleId={module._id} />
      </div>
      {children && (
        <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
      )}
    </li>
  );
}
