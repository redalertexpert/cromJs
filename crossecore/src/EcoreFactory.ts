import {EAttribute} from "./EAttribute";
import {EAnnotation} from "./EAnnotation";
import {EGenericType} from "./EGenericType";
import {EEnumLiteral} from "./EEnumLiteral";
import {ETypedElement} from "./ETypedElement";
import {EReference} from "./EReference";
import {EClassifier} from "./EClassifier";
import {ENamedElement} from "./ENamedElement";
import {EClass} from "./EClass";
import {EStringToStringMapEntry} from "./EStringToStringMapEntry";
import {EPackage} from "./EPackage";
import {EEnum} from "./EEnum";
import {EObject} from "./EObject";
import {EModelElement} from "./EModelElement";
import {EParameter} from "./EParameter";
import {EOperation} from "./EOperation";
import {ETypeParameter} from "./ETypeParameter";
import {EDataType} from "./EDataType";
import {EFactory} from "./EFactory";
import {EStructuralFeature} from "./EStructuralFeature";
export interface EcoreFactory extends EFactory{
	createEAttribute():EAttribute;
	createEAnnotation():EAnnotation;
	createEClass():EClass;
	createEClassifier():EClassifier;
	createEDataType():EDataType;
	createEEnum():EEnum;
	createEEnumLiteral():EEnumLiteral;
	createEFactory():EFactory;
	createEModelElement():EModelElement;
	createENamedElement():ENamedElement;
	createEObject():EObject;
	createEOperation():EOperation;
	createEPackage():EPackage;
	createEParameter():EParameter;
	createEReference():EReference;
	createEStructuralFeature():EStructuralFeature;
	createETypedElement():ETypedElement;
	createEStringToStringMapEntry():EStringToStringMapEntry;
	createEGenericType():EGenericType;
	createETypeParameter():ETypeParameter;
}