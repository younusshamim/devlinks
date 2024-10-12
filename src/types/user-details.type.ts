import { CustomizeLinksArrayType } from "@/validators/customize-link.schema";
import { ProfileDetailsType } from "@/validators/profile-details.schema";

export interface UserDetailsType
  extends Partial<ProfileDetailsType>,
    Partial<CustomizeLinksArrayType> {}
